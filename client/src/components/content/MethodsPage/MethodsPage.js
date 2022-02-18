import React from 'react';
import {Logo} from "../../Logo";
import {Text} from "../../Text";
import {Card} from "../../Card";
import {Copyright} from "../../Copyright";
import style from './MethodsPage.module.css';

const MethodsPage = () => {
    return (
        <>
            <div className="container">
                <Logo />
                <Text textStyle="methods">This is the Way of the <br/> EclipseNetwork</Text>
                <Card cardStyle="methods__card">
                    <div className={style.item}>
                        <Text textStyle="methods__card-title">Simple</Text>
                        <Text textStyle="methods__card-text">Everything that isn't needed excluded</Text>
                    </div>
                    <div className={style.item}>
                        <Text textStyle="methods__card-title">Comfor <br className="br"/>table</Text>
                        <Text textStyle="methods__card-text">From our website to your manager</Text>
                    </div>
                    <div className={style.item}>
                        <Text textStyle="methods__card-title">Bearded</Text>
                        <Text textStyle="methods__card-text">Cause we never shave</Text>
                    </div>
                    <div className={style.item}>
                        <Text textStyle="methods__card-title">Clear</Text>
                        <Text textStyle="methods__card-text">No bullshit</Text>
                    </div>
                    <div className={style.item}>
                        <Text textStyle="methods__card-title">Fast</Text>
                        <Text textStyle="methods__card-text">From payouts to managers</Text>
                    </div>
                </Card>
            
                <div className={style.copy}>
                    <Copyright />
                </div>
            </div>
        </>
    )
}

export default React.memo(MethodsPage)
