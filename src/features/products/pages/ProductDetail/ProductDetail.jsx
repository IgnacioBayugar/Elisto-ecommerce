import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../../../../components/common/StarRating';
import './ProductDetail.scss';

function ProductDetail() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchProduct() {
			const res = await fetch(`https://dummyjson.com/products/${id}`);
			const data = await res.json();
			setProduct(data);
			setLoading(false);
		}
		fetchProduct();
	}, [id]);

	if (loading) return <div className="text-center py-5">Cargando producto...</div>;
	if (!product) return <div className="text-center py-5 text-danger">Producto no encontrado</div>;

		return (
			<div className="idb-product-detail">
				<div className="idb-product-detail__container">
					<div className="idb-product-detail__image-section">
						<img
							src={product.thumbnail || product.images?.[0]}
							alt={product.title}
							className="idb-product-detail__main-image"
						/>
					</div>
					<div className="idb-product-detail__info-section">
						<h2 className="idb-product-detail__title">{product.title}</h2>
						<div className="idb-product-detail__rating">
							<StarRating rating={product.rating} />
						</div>
                        <div className='m-0 p-0'>
							<div className="idb-product-detail__price">${product.price}</div>
                            <span className="badge bg-secondary small">Stock: {product.stock}</span>
                        </div>
						<div className="idb-product-detail__description">
							<h5>Descripción</h5>
							<p>{product.description}</p>
						</div>
					</div>
				</div>
			</div>
		);
}

export default ProductDetail;
