import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Blood Test Results",
      excerpt: "Learn how to interpret common blood test results and what they mean for your health.",
      author: "Dr. Sarah Johnson",
      date: "December 15, 2024",
      category: "Health Education",
      readTime: "5 min read",
      image: "https://cdn.prod.website-files.com/66bdfc87da2d5175e8c7dd54/679ca4f452fb24be1d70272d_doctor-talking-with-patient-about-blood-sample.jpg"
    },
    {
      id: 2,
      title: "The Importance of Regular Health Checkups",
      excerpt: "Discover why regular health screenings are crucial for early disease detection and prevention.",
      author: "Dr. Michael Chen",
      date: "December 12, 2024",
      category: "Preventive Care",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Nutrition and Your Lab Results",
      excerpt: "How your diet affects your blood work and what you should eat before getting tested.",
      author: "Dr. Emily Rodriguez",
      date: "December 10, 2024",
      category: "Nutrition",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
    },
    {
      id: 4,
      title: "Managing Diabetes Through Regular Monitoring",
      excerpt: "Essential lab tests for diabetes management and how often you should get them.",
      author: "Dr. James Wilson",
      date: "December 8, 2024",
      category: "Chronic Disease",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      title: "Heart Health: Key Tests You Should Know",
      excerpt: "Important cardiac markers and tests that help assess your heart health.",
      author: "Dr. Lisa Thompson",
      date: "December 5, 2024",
      category: "Cardiology",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 6,
      title: "Thyroid Function: What Your Tests Reveal",
      excerpt: "Understanding thyroid function tests and their role in your overall health.",
      author: "Dr. Robert Kim",
      date: "December 3, 2024",
      category: "Endocrinology",
      readTime: "7 min read",
      image: "https://www.verywellhealth.com/thmb/Ux4FyeqlXftlLcAuOgNRHiHkGPA=/300x200/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1247879942-6ae731343c284df78527858d67d88a4a.jpg"
    }
  ];

  const categories = [
    "All Posts",
    "Health Education",
    "Preventive Care",
    "Nutrition",
    "Chronic Disease",
    "Cardiology",
    "Endocrinology"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about your health with expert insights, tips, and the latest in medical diagnostics.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">By {blogPosts[0].author}</p>
                    <p className="text-sm text-gray-500">{blogPosts[0].date}</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">By {post.author}</p>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Subscribe to our newsletter for the latest health insights and tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;