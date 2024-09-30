import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next';

const languages = [{
    code: "en", lang: "English"
},{
    code: "vn", lang: "VietNam"
}]



const LanguageSelector = () => {

  const {i18n} = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);

  }

  useEffect(()=>{
    document.body.dir = i18n.dir();
  //document.body.dir = i18n.dir();: Đặt thuộc tính dir của thẻ <body> dựa trên giá trị trả về của i18n.dir().
  // Nếu i18n.dir() trả về "ltr", văn bản trên trang sẽ được hiển thị từ trái sang phải (left-to-right), phù hợp với các ngôn ngữ như tiếng Anh, tiếng Việt.
  // Nếu i18n.dir() trả về "rtl", văn bản sẽ được hiển thị từ phải sang trái (right-to-left), phù hợp với các ngôn ngữ như tiếng Ả Rập, tiếng Do Thái.
  //https://www.youtube.com/watch?v=dltHi9GWMIo&t=42s
  }, [i18n, i18n.language])

  return (
    <div className='btn' >
      {
        languages.map(( item, index) => { 
          return (
            <button 
              className={item.code === i18n.language ? "selected" : ""}
              key={index}
              onClick={()=> changeLanguage(item.code)}
            >
              {item.lang}
            </button>
          )
        })
      }
    </div>
  )
}

export default LanguageSelector