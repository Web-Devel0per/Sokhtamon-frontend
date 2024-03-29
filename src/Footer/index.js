/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../src/assets/logo.png";
import linkedin from "../../src/assets/youtube.png";
import twitter from "../../src/assets/instagram.png";
import googlePlay from "../../src/assets/googleplay.png";
import appstore from "../../src/assets/appstore.png";
import fb from "../../src/assets/fb.png";
import { Text } from "../components/Text";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" flex flex-row justify-start items-center lg:mx-[3%] w-[90%] mt-20">
      <div className=" flex lg:flex-row xs:flex-col items-start lg:justify-between xs:justify-center py-[18px] w-[100%]">
        <div className="flex flex-col items-start justify-start lg:w-[50%] xs:w-[100%]">
          <img className="w-auto h-[50px]" src={logo} alt="sokhtamonOne_One" />
          <Text
            className=" mt-[15px] text-base text-gray-900 tracking-[0.51px] w-full"
            size="txtRobotoMedium16"
          >
           Давайте строить мечты вместе — ваш надежный источник качественных строительных материалов!
          </Text>

          <div className=" flex flex-row space-x-4 mt-4">
            <img src={fb} className=" w-6 h-6" alt="fb" />
            <img src={twitter} className=" w-6 h-6" alt="instagram" />
            <img src={linkedin} className=" w-6 h-6" alt="linkedin" />
          </div>
        </div>

        <div className=" flex flex-row xs:items-center lg:items-center gap-[35px] lg:justify-center xs:justify-start md:w-[55%] lg:space-x-3 lg:w-[40%] xs:w-[100%] h-auto">
          <div className=" flex flex-col h-auto xs:mt-5 lg:mt-0">
            <Text
              className="text-gray-900 text-xl"
              size="txtRobotoRomanSemiBold20"
            >
             Страницы
            </Text>

            <Link to="/">
            <Text
              className="lg:text-base xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto my-5"
              size="txtRobotoMedium16"
            >
              Главная
            </Text>
            </Link>

            <Link to="/service">
            <Text
              className="lg:text-base capitalize xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto"
              size="txtRobotoMedium16"
            >
               Услуги
            </Text>
            </Link>

            <Link to="/contact">
            <Text
              className="lg:text-base xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto my-5"
              size="txtRobotoMedium16"
            >
              Контакты
            </Text>
            </Link>

           <Link to="/about">
           <Text
              className="lg:text-base xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto my-0"
              size="txtRobotoMedium16"
            >
              О нас
            </Text>
           </Link>

          </div>

          {/* <div className=" flex flex-col justify-center items-center h-auto xs:mt-5 lg:mt-0">
            <Text
              className="text-gray-900 text-xl"
              size="txtRobotoRomanSemiBold20"
            >
              Поддержка
            </Text>

            <Text
              className="lg:text-base xs:text-xs md:text-xs text-center text-gray-900 tracking-[0.51px] w-auto my-5"
              size="txtRobotoMedium16"
            >
             Часто задаваемые вопросы
            </Text>

            <Text
              className="lg:text-base capitalize xs:text-xs md:text-xs text-center text-gray-900 tracking-[0.51px] w-auto"
              size="txtRobotoMedium16"
            >
              Центр поддержки
            </Text>

            <Text
              className="lg:text-base xs:text-xs md:text-xs text-center text-gray-900 tracking-[0.51px] w-auto my-5"
              size="txtRobotoMedium16"
            >
              Безопасность
            </Text>

            <Link to="/subscription">
            <Text
              className="lg:text-base xs:text-xs md:text-xs text-center text-gray-900 tracking-[0.51px] w-auto my-0"
              size="txtRobotoMedium16"
            >
             Подписка
            </Text>
            </Link>

            
          </div> */}

          <div className=" flex flex-col h-auto xs:mt-5 lg:mt-0">
            <Text
              className="text-gray-900 text-xl"
              size="txtRobotoRomanSemiBold20"
            >
              Правила сайта
            </Text>

           <Link to="/privacy">
           <Text
              className="lg:text-base xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto my-5"
              size="txtRobotoMedium16"
            >
            Политика конфиденциальности
            </Text>
           </Link>

            <Link to="/tos">
            <Text
              className="lg:text-base xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto my-0"
              size="txtRobotoMedium16"
            >
              Условия эксплуатации
            </Text>
            </Link>

           <Link to="/use">
           <Text
              className="lg:text-base xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto my-5"
              size="txtRobotoMedium16"
            >
            Условия использования
            </Text>
           </Link>

           <Link to="/login">
           <Text
              className="lg:text-base xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto my-0"
              size="txtRobotoMedium16"
            >
            Вход 
            </Text>
           </Link>

         

          </div>

        </div>

      <div className=" flex flex-col lg:gap-[15px] xs:gap-[10px] md:gap-[10px] justify-center items-center md:w-auto lg:w-auto h-auto xs:w-[100%]">
      <img
                      className="lg:h-[59px] lg:ml-20 xs:ml-0 items-center md:w-[120px] lg:w-auto xs:h-[40px] md:h-[40px]"
                      src={googlePlay}
                      alt="googleplay"
                    />
                    <img
                      className="lg:h-[59px] lg:ml-20 xs:ml-0 items-center md:w-[120px] lg:w-auto xs:h-[40px] md:h-[40px]"
                      src={appstore}
                      alt="appstore"
                    />
      </div>

      </div>
    </div>

    
  );
};

export default Footer;
