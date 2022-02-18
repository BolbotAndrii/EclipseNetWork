import React from 'react';
import {Logo} from "../../Logo";
import {Text} from "../../Text";
import {Card} from "../../Card";
import {Copyright} from "../../Copyright";
import {Button} from "../../Button";
import style from './GoalsPage.module.css';

const GoalsPage = ({modal}) => {
    return (
        <>
            <div className="container">
                <Logo />
                <Text textStyle="goals">connecting your conversions to earnings</Text>
                <Card cardStyle="goals__card">
                    <Text textStyle="goals__card-text">
                        We will go to a galaxy far, far away, if it helps find the
                        best converting deals and funnels for you
                    </Text>
                </Card>

                <Button
                    modal={modal}
                    text="Show me the Way"
                    styleBtn="goals__btn">
                    <span> </span><span> </span><span> </span>
                </Button>

                <div className={style.copy}>
                    <Copyright />
                </div>
            </div>
        </>
    )
}

export default React.memo(GoalsPage)