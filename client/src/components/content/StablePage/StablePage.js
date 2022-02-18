import React from 'react';
import {Logo} from "../../Logo";
import {Text} from "../../Text";
import {Copyright} from "../../Copyright";
import {Card} from "../../Card";
import style from './StablePage.module.css'
import {Button} from "../../Button";

const StablePage = ({modal}) => {
    return (
        <>
            <div className="container">
                <Logo />
                <Text textStyle="stable">Get a stable and high-quality <br className={style.br}/> traffic for your Finance business</Text>
                <div className={style.wrap}>
                    <Card cardStyle="stable__card">
                        <Text textStyle="stable__card-text">
                            By building a strong and effective team of independent buyers, we can provide your financial business with the best traffic on the market
                        </Text>
                    </Card>
                    <Card cardStyle="stable__card">
                        <Text textStyle="stable__card-text">
                            Connecting different sources of traffic without losing quality is chalenging, but we dare to do it
                        </Text>
                    </Card>
                </div>

                <Button
                    modal={modal}
                    text="And here is why"
                    styleBtn="stable__btn">
                    <span> </span><span> </span><span> </span>
                </Button>
            
                <div className={style.copy}>
                    <Copyright />
                </div>
            </div>
        </>
    )
}

export default React.memo(StablePage)