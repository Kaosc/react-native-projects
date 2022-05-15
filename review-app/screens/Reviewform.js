import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { globalStyles } from '../styles/global';
import FlatButton from '../shared/Button';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(12),
    rating: yup.string().required().test('isNum-1-5', 'Rating must be a number between 1-5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    // actions.resetForm()
                    addReview(values)
                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input} 
                            placeholder='Review title'
                            placeholderTextColor='#555'
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}> { formikProps.touched.title && formikProps.errors.title} </Text>

                        <TextInput 
                            multiline minHeight={100}
                            style={globalStyles.input} 
                            placeholderTextColor='#555'
                            placeholder='Review body'
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}> { formikProps.touched.body && formikProps.errors.body} </Text>

                        <TextInput 
                            keyboardType='numeric'
                            style={globalStyles.input} 
                            placeholderTextColor='#555'
                            placeholder='rating (1-5)'
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            onBlur={formikProps.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}> {formikProps.touched.rating && formikProps.errors.rating} </Text>

                        <FlatButton text='sumbit' onPress={formikProps.handleSubmit}/>
                        
                    </View>
                )}
                
            </Formik>
        </View>
    )
}