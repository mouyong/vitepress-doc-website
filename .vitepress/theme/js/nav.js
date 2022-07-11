function toggleNavbarOnPageChange() {
  if (location.pathname.includes('home')) {
    // 取消 top 的高度，便于自定也页面文档流
    document.documentElement.style.setProperty('--vp-nav-height-mobile', 0)
    document.documentElement.style.setProperty(
      '--vp-nav-height-desktop',
      0
    )

    // 让导航栏不占用文档流
    document.querySelector('.VPNav').style.visibility = 'hidden'
  } else {
    // 恢复导航栏高度
    document.documentElement.style.setProperty(
      '--vp-nav-height-mobile',
      '56px'
    )
    document.documentElement.style.setProperty(
      '--vp-nav-height-desktop',
      '72px'
    )

    // 恢复文档流
    document.querySelector('.VPNav').style.visibility = 'visible'
  }
}

if (typeof window !== 'undefined') {
  window.toggleNavbarOnPageChange = toggleNavbarOnPageChange
}

if (typeof global !== 'undefined') {
  global.toggleNavbarOnPageChange = toggleNavbarOnPageChange
}
