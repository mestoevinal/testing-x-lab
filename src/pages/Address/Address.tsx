import React, {useState} from 'react';
import AddressCss from './Address.module.scss'
import searchIcon from './img/searchIcon.svg'
import {fetchAddress} from "../../api/address";

interface requestAddress {
    value:string,
    unrestricted_value:string,
    data:[object]
}

const Address = () => {
    const [address, setAddress] = useState([])
    const [query, setQuery] = useState('')

    async function fetch(){
        setAddress(await fetchAddress(query))
    }
    return (
        <div className={AddressCss.wrapper}>
            <div className={AddressCss.wrapperSearchInput}>
                <div className={AddressCss.title}>
                    Поиск адресов
                </div>
                <div>
                    Введите интересующий вас адрес
                </div>
                <div className={AddressCss.searchContainer}>
                    <input
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        type="text"
                        placeholder={"Введите интересующий вас адрес"}
                    />
                    <button
                        onClick={fetch}
                    >
                        <img src={searchIcon} alt="Поиск адреса"/> <span>Поиск</span>
                    </button>
                </div>
            </div>


            <div className={AddressCss.searchListContainer}>
                <div className={AddressCss.listWrapper}>
                    <strong style={{marginBottom:"16px"}}>
                        Адреса
                    </strong>
                    {address.map((el: requestAddress) =>
                        <div>
                            {el.value}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Address;