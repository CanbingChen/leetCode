var data = [
    {userId: 8,  title: 'title1'},
    {userId: 11, title: 'other'},
    {userId: 15, title: null},
    {userId: 19, title: 'title2'}
  ];
  var find = function(origin) {
    const obj = new Find(origin)
    return obj
    // your code are here...
  }
  function Find(origin){
    this.data = origin
  }

  Find.prototype.where = function(filter){
     this.data = this.data.filter((item) => {
         return  Reflect.ownKeys(filter).every(key => {
             if(!item[key])return false
             return item[key].match(filter[key])
         })
     })     
     console.log(this.data)
     return this
  }

  Find.prototype.orderBy = function(key,orderType){

    return this.data.sort((a,b) => {
        if(orderType === 'desc'){
            return a[key]<b[key]?1:-1
        }
        return a[key]<b[key]?-1:1
    })

  }

  var result = find(data).where({
    'title': /\d$/
  }).orderBy('userId', 'desc');
  console.log(result)