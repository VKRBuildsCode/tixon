function isMobile(){
    return navigator.userAgent.toString().toLowerCase().includes("android") ||
        navigator.userAgent.toString().toLowerCase().includes("iphone")
}