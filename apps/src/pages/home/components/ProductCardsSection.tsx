
const ProductCardsSection = () => {
  const products = [
    {
      id: 1,
      title: "Smart & Handy Watch",
      subtitle: "Apple Watch Series 7",
      image: "https://static.readdy.ai/image/ef1aae41220ad17a1705abffff22a58b/a00af48bffbccca8974e8c7e8c99bffc.png",
      bgColor: "bg-gradient-to-br from-blue-100 to-purple-100"
    },
    {
      id: 2,
      title: "Latest Technology New Charging System",
      subtitle: "Wireless Charging Pad",
      image: "https://static.readdy.ai/image/ef1aae41220ad17a1705abffff22a58b/075688c34657f6b05e4d5fd20334ef3b.png",
      bgColor: "bg-gradient-to-br from-blue-100 to-purple-100"
    },
    {
      id: 3,
      title: "Modern & Stylish Headphone",
      subtitle: "Sony WH-1000XM4",
      image: "https://static.readdy.ai/image/ef1aae41220ad17a1705abffff22a58b/210a0e3b8e7d1d83e3014d624a82d540.png",
      bgColor: "bg-gradient-to-br from-purple-100 to-pink-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className={`${product.bgColor} rounded-xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer`}>
              {/* Product Info - 居中对齐 */}
              <div className="relative z-10 text-center space-y-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {product.subtitle}
                  </p>
                </div>
              </div>

              {/* Product Image - 居中对齐 */}
              <div className="relative z-10 flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCardsSection;
