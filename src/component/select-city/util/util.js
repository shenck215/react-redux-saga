let util = {
    /**
     * [parseAddress 分解json地址]
     * @param  {} data [description]
     * @return {[type]}      [description]
     */
    parseAddress(data) {
        let maps = [];
        let index = 0;

        function fn(data, value) {

            data.forEach((v, i) => {
                let area = v.area;
                let list = v.list;
                let parentId = -1;

                if (value !== undefined) {
                    parentId = value;
                }
                if (list) {
                    list.forEach((v, i) => {

                        let name = v.name;
                        let value = v.value;

                        /* 创建对应的哈希表 */
                        if (maps[index] === undefined) {
                            maps.push(new Map());
                        }

                        /* 如果是第一级 */
                        if (index === 0) {

                            /**
                             * 设置Map对象，格式如下
                             * {
                             * 'A-D':
                             *    {
                             *     'A-D': {
                             *        1: "浙江"
                             *        }
                             *     }
                             *  }
                             */

                            let obj = maps[index].get(area) || {};

                            if (obj[area]) {
                                obj[area][value] = name;
                            } else {
                                obj[area] = {};
                                obj[area][value] = name;
                            }


                            maps[index].set(area, obj);
                        }

                        /* 如果是不是第一级 */
                        else {

                            /**
                             * 设置Map对象，格式如下
                             * 1对象上一级的id，类似parentId
                             * {
                             *   1: {
                             *    'A-D': {
                             *        2: "杭州"
                             *     }
                             *   }
                             * }
                             */
                            let obj = maps[index].get(parentId) || {};

                            if (obj[area]) {
                                obj[area][value] = name;
                            } else {
                                obj[area] = {};
                                obj[area][value] = name;
                            }

                            maps[index].set(parentId, obj);
                        }

                        /* 递归children */
                        let children = v.children;
                        if (children && children.length > 0) {
                            index ++;
                            fn(children, value);
                        }
                    });
                }
            });
            index--;
        }

        fn(data);

        return maps;
    },
    /**
     * parseAddressName 按照id解析中文地址
     * @param  {Array} data 对应的id
     * @param  {Map} map  对照的Map
     * @return {Array}      中文地址
     */
    parseAddressName(data, map) {
        if(data.length <= 0) return [];

        let arr = data.map((v, i) => {
            if( i === 0) {
                for(let val of map[i].values()) {
                    for(let key in val) {
                        let obj = val[key];
                        if(obj[v]) {
                            return obj[v];
                        }
                    }
                }
            }
            else {
                let id = data[i - 1]
                let obj = map[i].get(id);
                for(let key in obj) {
                    let obj2 = obj[key];
                    if(obj2[v]) {
                        return obj2[v];
                    }
                }
            }
        });

        return arr;
    }
}


module.exports = util;
