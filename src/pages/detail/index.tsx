import * as React from 'react'
import {
    useEffect,
    useState
}  from 'react';
import { SafeAreaView , Text, View, FlatList } from "react-native";
import GenericService from '../../services/genericService';
import Card from "../../components/card";
import styles from "../../index.styles";

const Detail = (props: any) => {
    const data = props.route.params.item;
    const arrayUrlSpecies = [];
    const arrayUrlFilms = [];
    const arrayUrlVehicles = [];
    const arrayUrlStarships = [];
    
    const [planet, setPlanet] = useState({name: ''})
    const [films, setFilms] = useState([])
    const [species, setSpecies] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [starships, setStarships] = useState([])

    useEffect(() => {
        getPlanet();
        getUrlInfomations();
    }, [])

    const getPlanet = async () => {
        const response : any = await new GenericService().getGenericRequest(data.homeworld);
        setPlanet(response);
    }

    const getUrlInfomations = async () => {
        data.films.map((item) => {arrayUrlFilms.push(item)})
        data.species.map((item) => {arrayUrlSpecies.push(item)})
        data.vehicles.map((item) => {arrayUrlVehicles.push(item)})
        data.starships.map((item) => {arrayUrlVehicles.push(item)})

        const films = await Promise.all(arrayUrlFilms.map(eachUrl => new GenericService().getGenericRequest(eachUrl)));
        const species = await Promise.all(arrayUrlSpecies.map(eachUrl => new GenericService().getGenericRequest(eachUrl)));
        const vehicles = await Promise.all(arrayUrlVehicles.map(eachUrl => new GenericService().getGenericRequest(eachUrl)));
        const starships = await Promise.all(arrayUrlStarships.map(eachUrl => new GenericService().getGenericRequest(eachUrl)));

        setSpecies(species)
        setFilms(films);
        setVehicles(vehicles);
        setStarships(starships);
    }

    const detail = [
        {
            title: 'Nome:',
            value: data.name
        },
        {
            title: 'Ano de nascimento:',
            value: data.birth_year
        },
        {
            title: 'Cor dos olhos:',
            value: data.eye_color
        },
        {
            title: 'Gênero:',
            value: data.gender
        },
        {
            title: 'Cor do cabelo:',
            value: data.hair_color
        },
        {
            title: 'Altura:',
            value: data.height
        },
        {
            title: 'Massa:',
            value: data.mass
        },
        {
            title: 'Cor da pele:',
            value: data.skin_color
        },
        {
            title: 'Planeta Natal:', 
            value: planet && planet.name
        },
    ]

    const renderLine = (item: any, key: any) => (
        <View style={styles.viewRow} key={key}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text>{item.value}</Text>
        </View>
      );

    const renderCard = ({ item }) => (
        <Card item={item} />
    );

    const renderFlatList = (title: string, item: any) => (
        <View style={item.length === 0 && styles.viewRow}>
            <Text style={[styles.textTitle, {padding: 5}]}>{title}:</Text>
            {item.length > 0 ?
            (
                <FlatList
                    data={item}
                    renderItem={renderCard}
                    keyExtractor={item => item.url}
                />
            ):(
                <Text>N/A</Text>
            )}
        </View>
    );

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerView}>
                {detail.map((item, index) => (
                    renderLine(item, index)
                ))}
                {renderFlatList('Filmes', films)}
                {renderFlatList('Especies', species)}
                {renderFlatList('Veículos', vehicles)}
                {renderFlatList('Naves Estelares', starships)}
            </View>
        </SafeAreaView>
    );
}

export default Detail;