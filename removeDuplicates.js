var removePromise = function(){
    return new Promise(function(resolve,reject){
        resolve([4,1,1,1,1,2,3,4,5].filter((v,i,a)=> a.indexOf(v)===i));
        reject("false");
    })

    
}

    removePromise().then(array=>console.log(array))
    .catch(err=>console.log(err));
        
   
// ---------------------------------------------------------------------------