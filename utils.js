export const getWidth = (element, content = false) => {
    const styles = window.getComputedStyle(element)
    const width = content ? element.scrollWidth : element.clientWidth
    const borderLeft = parseFloat(styles.borderLeftWidth)
    const borderRight = parseFloat(styles.borderRightWidth)
    const padLeft = parseFloat(styles.paddingLeft)
    const padRight = parseFloat(styles.paddingRight)
    
    return width - borderLeft - borderRight - padLeft - padRight
}

export const setCookie = (c) => {
    console.log('setcookies before:',document.cookie)
	// let cookies = document.cookie
    document.cookie = c
    console.log('setcookies after:', document.cookie)
}

export const getCookie = () => {
    console.log('getcookies:', document.cookie)
	return (document.cookie || '').split(';')
}

export const checkCookie = (cookie) => {
    const c = getCookie()
    const includes = c.filter(v => v.includes(cookie))
    console.log('Check', includes)
    return includes.length ? includes[0].trim().split('=')[1] : false
}

export const validateUrl = (URL) => {
    const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    
    return pattern.test(URL)
}

export const idbUrl = (url = false) => {
    return new Promise(resolve => {

        let db
    
        const request = window.indexedDB.open("btctpa", 1)
    
        request.onerror = (event) => {
            // Do something with request.errorCode!
            console.error("Database error: " + event.target.errorCode)
        }
    
        request.onsuccess = (event) => {
            // Do something with request.result!
            db = event.target.result
            const transaction = db.transaction('URL', 'readwrite')
    
            const URL = transaction.objectStore('URL')
    
            transaction.onsuccess = function(event) {
                console.log('[Transaction] ALL DONE!');
            }
    
            if(!url){
                URL.get(1).onsuccess = (event) => {
                    const e = event.target.result
                    //console.log(e)
                    return resolve(e)
                }
            } 

            if(url === 'reset') {
                URL.delete(1).onsuccess = (event) => {
                    console.log('URL Deleted')
                    return resolve(false)
                }
            } else if(url){
                console.log(url)
                const btcpayurl = {id: 1, url}
                const add = URL.add(btcpayurl)
                add.onsuccess = (event) => {
                    console.log(event.result)
                    return resolve(event.result)
                }
            }
        }
    
        request.onupgradeneeded = (event) => {
            // create object store from db or event.target.result
            db = event.target.result
            // const transaction = db.transaction('URL', 'readwrite')
            const URL = db.createObjectStore('URL', {keyPath: 'id'})
            console.log('Upgrade')
        }
    })
}