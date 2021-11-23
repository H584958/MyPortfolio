import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from "rxjs";
import {object} from "prop-types";

export default class ScrollService{
    static scrollHandeler = new ScrollService();
    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()

    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport)
    }

    scrollToHireMe = () => {
        let ccontactMeScreen = document.getElementById("Contact Me")
        if(!ccontactMeScreen) return;
        ccontactMeScreen.scrollIntoView({behavior: "smooth"})
    }

    scrollToHome = () => {
        let homeScreen = document.getElementById("Home")
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior: "smooth"})
    }
    isElementInView = (elem, type)=>{
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;

        let partiallyVisable = elementTop < window.innerHeight && elementBottom >=0;
        let completleyVisable = elementTop >= 0 && elementBottom <= window.innerHeight;

        switch(type){
            case "partial":
                return partiallyVisable;
            case "complete":
                return completleyVisable
                default:
                    return false

        }
    }

    checkCurrentScreenUnerViewport = (event)=>{
        if (!event || object.keys(event).length < 1)
        return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDom = document.getElementById(screen.screen_name);
            if(!screenFromDom)
            continue;

            let fullyVisible = this.isElementInView(screenFromDom, "complete")
            let partiallyVisable = this.isElementInView(screenFromDom,"partial")
            
            if(fullyVisible || partiallyVisable){
                if(partiallyVisable && !screen.allreadyRendered){
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['allreadyRendered'] = true;
                    break;
                }
                if(fullyVisible){
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }
        }
    }

}