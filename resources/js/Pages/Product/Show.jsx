import React from "react";
import { Link, useForm } from "@inertiajs/react";
import Toast from "../../components/Toast";
import ReviewList from "../../components/ReviewList";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Show(props) {
    const { flash, product } = props

    const { data, setData, post, processing, errors, reset } = useForm({
        rating: '',
        content: '',
    })

    const handleSubmit = () => {
        post(`/products/${product.id}/reviews`)
        reset()
    }

    return(
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <div className="base-container">
                <Toast flash={flash}/>
                <h1 className="main-title">Visualizar Produto</h1>
                <div className="input-container">
                    <div className="input-area">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            value={product.name}
                            disabled />
                    </div>
                    <div className="input-area">
                        <label htmlFor="description">Descrição</label>
                        <textarea
                            name="description"
                            id="description"
                            value={product.description}
                            readOnly
                            cols="30"
                            rows="10"/>
                    </div>
                    <div className="input-area">
                        <label htmlFor="price">Preço</label>
                        <input
                            type="number"
                            id="price"
                            value={product.price}
                            disabled />
                    </div>
                    <div className="input-area">
                        <label htmlFor="quantity">Quantidade</label>
                        <input
                            type="number"
                            id="quantity"
                            value={product.quantity}
                            disabled />
                    </div>

                    <div className="input-area">
                        <h3 className="font-semibold text-lg text-gray-200 mb-1">Nova avaliação:</h3>
                        <div className="flex flex-col gap-2">
                            <div>
                                <input
                                    type="number"
                                    id="quantity"
                                    placeholder="Digite aqui uma nota de 1 a 5"
                                    value={data.rating}
                                    min={1}
                                    max={5}
                                    onChange={e => setData('rating', e.target.value)} />
                                <small className="error">{errors.rating}</small>
                            </div>
                            <div>
                                <textarea
                                    name="content"
                                    id="content"
                                    value={data.content}
                                    onChange={e => setData('content', e.target.value)}
                                    placeholder="Digite aqui a sua avaliação"
                                    cols="30"
                                    rows="2"/>
                                <small className="error">{errors.content}</small>
                            </div>
                        </div>
                    </div>

                    <div className="input-area flex items-center justify-end gap-4">
                        <Link href="/products" className="btn bg-gray-400">Voltar</Link>
                        <button onClick={handleSubmit} className="btn bg-green-600">Postar</button>
                    </div>

                    <div className="input-area">
                        <ReviewList reviews={props?.product?.reviews} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
