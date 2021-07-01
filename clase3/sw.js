self.addEventListener('install', e => {
    console.log('sw install')
})

self.addEventListener('activate', e => {
    console.log('sw activate')
})

self.addEventListener('fetch', e => {
    //console.log('sw fetch!!!')
    //console.log(e)
    //console.log (e.request)

    /* let url = e.request.url
    let method =e.request.method*/
    let { url,method}= e.request // destructuring object
    console.log(method,url)

    //let respuesta
})





