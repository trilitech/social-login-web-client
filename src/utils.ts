const IN_APP_BROWSERS_REGEX = /(Instagram|Snapchat|Twitter|FBAV|FBAN|TikTok)/i

export function isBrowserOAuthCompatible() {
    var userAgent = navigator.userAgent || navigator.vendor

    if (IN_APP_BROWSERS_REGEX.test(userAgent)) {
        return false
    }

    if (window.self !== window.top) {
        return false
    }

    return true
}