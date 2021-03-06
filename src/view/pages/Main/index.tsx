// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, ColumnNavigation, ColumnContent, ColumnInfo } from '../../components';

//Element
import { CurrentPageName, NavigateBtn } from '../../elements';

// Styles
import * as S from './styles';

// Tools
import { ACCORDION, KEYBOARD, LESSON1, LESSON2, LESSON3, LESSON4, LESSON6, LESSON7, STUDENTREGISTRATION } from '../../routes/book';

const Main: FC = () => {
    return (
        <S.Inner>
            <ColumnNavigation>
                <CurrentPageName pageName = 'Main'/>
                <NavigateBtn
                    lessonName = 'Lesson 1'
                    rootBookName = { LESSON1 }
                />
                <NavigateBtn
                    lessonName = 'Lesson 2'
                    rootBookName = { LESSON2 }
                />
                <NavigateBtn
                    lessonName = 'Lesson 3'
                    rootBookName = { LESSON3 }
                />
                <NavigateBtn
                    lessonName = 'Lesson 4'
                    rootBookName = { LESSON4 }
                />
                <NavigateBtn
                    lessonName = 'Lesson 5-6:Student Registration'
                    rootBookName = { STUDENTREGISTRATION }
                />
                <NavigateBtn
                    lessonName = 'Lesson 6:Student Profile Redux'
                    rootBookName = { LESSON6 }
                />
                <NavigateBtn
                    lessonName = 'Lesson 7'
                    rootBookName = { LESSON7 }
                />
                <NavigateBtn
                    lessonName = 'Keyboard'
                    rootBookName = { KEYBOARD }
                />
                <NavigateBtn
                    lessonName = 'Accordion'
                    rootBookName = { ACCORDION }
                />
            </ColumnNavigation>
            <ColumnContent>
                <S.Title>React & Redux course</S.Title>
                <img
                    src = 'https://cdn.pellerex.com/public/ecosystem/web/content/identity/react-identity-check/react-redux.png'
                    style = {{ width: '20%', margin: '30px auto 0', display: 'block' }}
                />
            </ColumnContent>
            <ColumnInfo>
                <S.Img src = { 'https://www.meme-arsenal.com/memes/58a36f28ab98836d7b9a39804fbd4d00.jpg' } />
                <S.UserName>Dmitry Ponomarenko</S.UserName>
            </ColumnInfo>
        </S.Inner>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
