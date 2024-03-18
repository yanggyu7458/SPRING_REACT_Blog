import React, { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, forwardRef } from 'react'
import './style.css';

//          interface: Input Box 컴포넌트 Properties            //
interface Props {
    label: string;
    type: 'text' | 'password';
    error: boolean;
    placeholder: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;

    icon?: string; //필수가 아닌 선택
    onButtonClick?: () => void;

    message?: string;

    //          키보드 동작         //
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
//          component: Input Box 컴포넌트           //
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref)  => {
    //          render: Input Box 컴포넌트             //

    //          state: properties           //
    const { label, type, error, placeholder, value, icon, message } = props;
    const { setValue, onButtonClick, onKeyDown } = props;

    //          event hanlder : input 키 이벤트 처리 함수
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //const value = event.target.value ;
        const {value} = event.target ;
        setValue(value);
    };

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(!onKeyDown) return;
        onKeyDown(event);
    };
    return (
        <div className='inputbox'>
            <div className='inputbox-label'>{'label'}</div>
            <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input ref={ref} type={type} className='input' placeholder={placeholder} value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
                {onButtonClick !== undefined && (
                    <div className='icon-button'>
                        {icon !== undefined && (
                            <div className={`icon ${icon}`}></div>
                        )}
                    </div>
                )}
                
            </div>
            {message !==undefined && (
                <div className='inputbox-message'>{message}</div>
            )}
        </div>
    )

});

export default InputBox;