import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles.css'






export default function (Vue, { head }) {
  head.link.push({
    rel: 'stylesheet',
   href: 'https://fonts.googleapis.com/css?family=Exo:400,700,800,900%7CRubik:400,700,900&display=swap',
   href: 'https://fonts.googleapis.com/css?family=Rubik:400,700,900&display=swap'
  })

  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}


  

