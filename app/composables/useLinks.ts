export const useLinks = () => {
  const headerTextLinks = [
    { id: 1, href: '/products', label: 'Магазин' },
    { id: 2, href: '/about', label: 'О нас' }
  ]

  const headerIconLinks = [
    { id: 1, href: '/cart', name: 'icons:cart' },
    { id: 2, href: '/favorites', name: 'icons:favorite' },
    { id: 3, href: '/account', name: 'icons:user' }
  ]

  const footerTextLinks = [
    { id: 1, href: '#', label: 'Контакты' },
    { id: 2, href: '#', label: 'Условия покупки' },
    { id: 3, href: '#', label: 'Доставка и возврат' }
  ]

  const footerSocialsLinks = [
    { id: 1, href: '#', name: 'icons:linkedin' },
    { id: 2, href: '#', name: 'icons:facebook' },
    { id: 3, href: '#', name: 'icons:instagram' },
    { id: 4, href: '#', name: 'icons:twitter' }
  ]

  const menuTextLinks = [
    { id: 1, href: '/', label: 'Главная' },
    { id: 2, href: '/products', label: 'Магазин' },
    { id: 3, href: '/about', label: 'О нас' }
  ]

  const menuIconLinks = [
    { id: 1, href: '/account', name: 'icons:user', label: 'Мой аккаунт' },
    { id: 2, href: '/favorites', name: 'icons:favorite', label: 'Мой избранное' }
  ]

  return {
    headerTextLinks,
    headerIconLinks,
    footerTextLinks,
    footerSocialsLinks,
    menuTextLinks,
    menuIconLinks
  }
}
