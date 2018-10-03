var removePromise = function(){
    return new Promise(function(resolve,reject){
        resolve([4,1,1,1,1,2,3,4,5].filter((v,i,a)=> a.indexOf(v)===i));
        reject("false");
    })

    
}

    removePromise().then(array=>console.log(array))
    .catch(err=>console.log(err));
        
   
//------------------------------------------
async function removeasync(){
    try{
        let results = await removeDuplicate();
        console.log(results);
    }catch(error){
        console.log(error);
    }
}
removeasync();
function removeDuplicates(){
    return[4,5,4,6,7,8,9,9,9,8,7,6,1].filter((v,i,a)=>a.indexOf(v)===i);
}

// ---------------------------------------------------------------------------
