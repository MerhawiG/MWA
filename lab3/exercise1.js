{

    const dns = require('dns');

    const util = require('util');

    const { from } = require('rxjs');




    dns.resolve4('www.mum.edu', (err, addresses) => {

        console.log("Resolve4: " + addresses)

    });





   

    const promise = util.promisify(dns.resolve4);

    promise('www.mum.edu').then((addresses) => {

        console.log("Promise: " + addresses)

    });





    

    const promise2 = util.promisify(dns.resolve4);

    async function resolvePromise() {

        try {

            const promise2 = await promise('www.mum.edu');

            console.log('CONTENT Async/await:', promise2);

        } catch (err) {

            console.log('ERROR Async/await:', err);

        }

    }

    resolvePromise();



   

    const promise3 = util.promisify(dns.resolve4)('www.mum.edu');

    from(promise3).subscribe(

        (e) => console.log('observable CONTENT:', e),

        (err) => console.log('observable ERROR:', err),

        () => console.log("observable Done!!!")

    );

}