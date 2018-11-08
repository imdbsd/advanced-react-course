import React, { Component } from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Head from 'next/head';
import Error from './ErrorMessage';
const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!){
        item(where: {id: $id}) {
            id
            title
            description
            price
            largeImage
        }
    }
`;

const SingleItemStyles = styled.div`
    max-width: 1200px;
    margin: 2rem auto;
    box-shadow: ${props => props.theme.bs};
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    min-height: 800px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .details {
        margin: 3rem;
        padding: 2rem;
    }
`;

class SingleItem extends Component {
    render() {
        console.log(this.props)
        return (
            <Query query={SINGLE_ITEM_QUERY} variables={{id: this.props.id}}>
                {({error, loading, data}) => {
                    if(error) return <p>Error!</p>
                    if(loading) return <Error error={error}/>
                    if(!data.item) return <p>Error, no data found.</p>
                    console.log({data})
                    const {item} = data;
                    return(
                        <SingleItemStyles>
                            <Head>
                                <title>Sick Fits | {item.title}</title>
                                <meta name="description" content={item.description}></meta>
                            </Head>
                            <img src={item.largeImage} alt={item.title}/>
                            <div className="details">
                                <h2>Viewing {item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </SingleItemStyles>
                    )
                }}
            </Query>
        );
    }
}

export default SingleItem;