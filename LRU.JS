var LRUCache = function(capacity) {
    this.limit = capacity
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key))return -1
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key,value)
    return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const size = this.cache.size;
    if(this.cache.has(key)){
        this.cache.delete(key)
    }else{
        if(size >= this.limit){
            const deleteKey= this.cache.keys().next().value
            this.cache.delete(deleteKey)
        }
    }
    this.cache.set(key,value)

};

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4