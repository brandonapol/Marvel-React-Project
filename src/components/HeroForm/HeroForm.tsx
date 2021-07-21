import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseDescription, choosePower, chooseDate, chooseComics } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface HeroFormProps {
    id?:string;
    data?:{}
}

interface DroneState {
    name: string;
    description: string;
    super_power: string;
    comics_appeared_in: string;
    date_created: string;
}

export const HeroForm = (props:HeroFormProps) => {

    const dispatch = useDispatch();
    let { heroData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<DroneState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            console.log(data)
            setTimeout( () => {window.location.reload()}, 1000)
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseDescription(data.description))
            dispatch(choosePower(data.super_power))
            dispatch(chooseComics(data.comics_appeared_in))
            dispatch(chooseDate(data.date_created))
            server_calls.create(store.getState())
            console.log(data)
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Hero Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="super_power">Powers</label>
                    <Input {...register('super_power')} name="super_power" placeholder="Powers"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="comics_appeared_in">Comics Appeared In</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="comics_appeared_in"/>
                </div>
                <div>
                    <label htmlFor="date_created">Date Created</label>
                    <Input {...register('date_created')} name="date_created" placeholder="date_created"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}