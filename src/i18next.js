import i18n, { init } from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next'

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug: true,
    fallbackLng: "en",
    returnObjects : true,
    resources : {
        en : {
            translation : {
                getting : "Hello , Welcome !" ,
                description : {
                    line1 : "winter",
                    line2 : "spring <1>{{chanel}}</1>"
                }
            }
        },
        vn: {
            translation : {
                getting : "Xin Chào, chào mừng !",
                description : {
                    line1 : "mùa đông",
                    line2 : "mùa xuân <1>{{chanel}}</1>"
                }
            }
        }
    }
})