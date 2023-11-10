"use client"

import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from "next/image";

interface Props {
    name: string;
    url: string;
}

const PokeCard = ({
    name,
    url,
}: Props) => {
    return (
        <Card className='product-card'>
            <CardContent>
                <div>
                    <img
                        src={url}
                        alt={name}
                        width={70}
                        height={70}
                    />
                </div>
                <div className="description">
                    <Typography variant='h6'>{name}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default PokeCard;