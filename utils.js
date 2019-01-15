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
    return (includes)
}