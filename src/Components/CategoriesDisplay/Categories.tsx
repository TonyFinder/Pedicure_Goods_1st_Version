import React, {useState} from 'react';
import {CategoriesType, DescriptionItemsType, ItemsType} from '../../Store/Store';
import {CategoryList} from './CategoryList/CategoryList';
import {AppBar, Button, ButtonGroup, Container, Grid, Toolbar, Typography} from '@material-ui/core';
import {ArrowRightAlt, FavoriteTwoTone} from '@material-ui/icons';

type CategoriesPropsType = {
    store: DescriptionItemsType & ItemsType & CategoriesType
    callbackWelcome: () => void
}

export const Categories = (props: CategoriesPropsType) => {
    const [menu, setMenu] = useState<boolean>(true)
    const [category, setCategory] = useState<string>('Сухая кожа стопы')
    const onClickHandler = (category: string) => {
        setCategory(category)
        setMenu(false)
    }

    return (
        <div>
            {menu ?
                (
                    <div>
                        <AppBar position={'sticky'}>
                            <Toolbar>
                                <Grid container justifyContent={'center'} alignItems={'center'}>
                                    <Grid item>
                                        <Grid container>
                                            <Typography align={'center'} variant="h6"
                                                        style={{marginRight: '5px', fontFamily: 'cursive'}}>Ваш
                                                Pedicure.cabinet</Typography>
                                            <FavoriteTwoTone/>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Button color="inherit" variant={'outlined'} style={{margin: '10px'}}
                                                onClick={props.callbackWelcome}>На главную</Button>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                        <Container maxWidth={'md'}>
                            <Grid container>
                                <Grid container justifyContent={'center'} style={{margin: '10px 0px'}}>
                                    <Typography align={'center'} variant="h6"
                                                style={{fontFamily: 'cursive', fontWeight: 'bolder'}}>Выберите
                                        категорию:</Typography>
                                </Grid>
                                <Grid container justifyContent={'center'}>
                                    <ButtonGroup color={'primary'} orientation={'vertical'}
                                                 aria-label={'vertical outlined button group'} variant={'text'}>
                                        {props.store.categories.map(category =>
                                            <Button key={category.id}
                                                    onClick={() => onClickHandler(category.category)}>{category.category}</Button>
                                        )}
                                    </ButtonGroup>
                                </Grid>
                                <Grid container justifyContent={'center'}>
                                    <img alt={'backgroundImage'} style={{opacity: '0.3'}}
                                         src={'https://live.staticflickr.com/65535/51706322654_f53b3c9628_n.jpg'}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                )
                :
                <div>
                    <AppBar position={'sticky'}>
                        <Toolbar>
                            <Grid container spacing={1} justifyContent={'center'} alignItems={'center'}
                                  style={{margin: '3px 0px'}}>
                                <Grid item>
                                    <Button color="inherit" variant={'outlined'}
                                            onClick={props.callbackWelcome}>На главную</Button>
                                </Grid>
                                <Grid item>
                                    <Button color="inherit" variant={'outlined'}
                                            onClick={() => setMenu(true)}>К Категориям</Button>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Container maxWidth={'md'}>
                        <CategoryList store={props.store} category={category}/>
                    </Container>
                </div>
            }
        </div>
    )

}
