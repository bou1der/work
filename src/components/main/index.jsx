import "./index.scss"

const MainInfo = ({}) =>{

    return(
        <>
            <div className="main-info-block about-me-block">
                <div className="background-white-block personal-info">
                    <div className={"my-characteristic"}>
                        <h1>Крошкин Никита</h1>
                        <h2>Веб разработчик</h2>
                        <h3>18 лет || 05.12.2005</h3>
                        <h3>г.Москва</h3>
                    </div>
                    <div className={"about-me"}>
                        <h2>Обо мне:</h2>
                        <p>
                            На данный момент обучаюсь в колледже на 3 курсе,
                            есть возможность выходить на полный день.
                        </p>
                        <p>
                            Моя цель - стать квалифицированным веб-разработчиком,
                            углубив свои знания и навыки в этих областях.
                        </p>
                        <p>
                            Стремлюсь попасть на работу/стажировку для получения новых знаний и опыта.
                        </p>
                        <p>
                            В свободное от учебы время пишу свои pet-проекты, читаю книги, играю на гитаре.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainInfo