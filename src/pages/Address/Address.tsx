import React from 'react';
import AddressCss from './Address.module.scss'

const Address = () => {
    return (
        <div className={AddressCss.wrapper}>
            <div className={AddressCss.title}>
                Поиск адресов
            </div>
            <div className={AddressCss.instruction}>
                Введите интересующий вас адрес
            </div>
            <div className={AddressCss.container}>
                <input
                    type="text"
                    className={AddressCss.input}
                    placeholder={"Введите интересующий вас адрес"}
                />
                <button
                    className={AddressCss.button}
                >
                    Поиск
                </button>
            </div>
        </div>
    );
};

export default Address;