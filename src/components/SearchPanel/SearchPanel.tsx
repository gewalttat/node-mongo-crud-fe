import React, {FC, useState} from 'react'
import style from './SearchPanel.module.scss'
// interface SearchPanelProps {

// }

export const SearchPanel:FC = () => {
    const [inputState, setInputState] = useState<string>('');
  return (
    <>
    <div className={style.searchPanelContainer}>
        <div className={style.searchPanelContainer__searchBar}>
            <input value={inputState} 
                   placeholder={'Поиск'}
                   onChange={(event) => setInputState(event.target.value)} 
                   className={style.searchPanelContainer__searchBar__input}/>
        </div>
        <div className={style.searchPanelContainer__searchLens}></div>
        <div className={style.searchPanelContainer__favs}></div>
        <div className={style.searchPanelContainer__cart}></div>
    </div>
    </>
  )
}