import React from 'react'
import { Logo } from '../components/Logo';
import { Button } from '@chakra-ui/react';

export const PageHeader = () => {
    return (
        <header className="p-4 bg-white bg-opacity-25 backdrop-blur-xl sticky top-0 left-0 w-full z-50">
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <div className='logo'>
                        <Logo />
                    </div>
                    <nav>
                        <Button colorScheme='blue'>Login</Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
