import React from 'react';
import {View, ViewProps} from 'react-native';
import {className as cn} from 'nativewind';

interface ContainerProps extends ViewProps {
    className?: string;
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({className = '', children, ...props}) => {
    return (
        <View className={cn(`flex-1 bg-background text-text p-4`, className)} {...props}>
            {children}
        </View>
    );
};

export default Container;
