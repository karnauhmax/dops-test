import gsap from 'gsap'
import { SplitText } from '@/helpers/splitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useAnimateText = (settings) => {
  const { element, trigger, type } = settings

  const splitText = new SplitText(element, {
    type: 'words,chars,lines'
  })

  gsap.from(splitText.chars, {
    opacity: 0,
    duration: 0.08,
    stagger: 0.03,
    scrollTrigger: {
      trigger: trigger,
      start: 'top 40%',
      end: 'bottom bottom'
    }
  })
}
