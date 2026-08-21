const articles = [

    {
        title: "The Future of Technology",
        category: "Technology",
        date: "August 21, 2026",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        content:
            "Technology is continuously changing the way we learn, work and communicate. New innovations are creating exciting opportunities for students and professionals."
    },

    {
        title: "Getting Started with Programming",
        category: "Programming",
        date: "August 20, 2026",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        content:
            "Programming is an important skill for students interested in technology. Start with a beginner-friendly language and practice by building small projects."
    },

    {
        title: "How AI is Changing Education",
        category: "AI",
        date: "August 18, 2026",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        content:
            "Artificial intelligence is becoming an important part of education. AI tools can help students learn concepts, organize information and explore new ideas."
    },

    {
        title: "Building Your First Web Project",
        category: "Programming",
        date: "August 16, 2026",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        content:
            "Building projects is one of the best ways to improve web development skills. Start with HTML, CSS and JavaScript and gradually add more features."
    },

    {
        title: "Career Tips for Students",
        category: "Career",
        date: "August 14, 2026",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
        content:
            "Students can prepare for their careers by developing technical skills, communication skills, creating projects and maintaining a professional portfolio."
    },

    {
        title: "Understanding Machine Learning",
        category: "AI",
        date: "August 12, 2026",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
        content:
            "Machine learning allows computers to identify patterns from data and make predictions. It is widely used in many modern applications."
    },

    {
        title: "Why Cybersecurity Matters",
        category: "Technology",
        date: "August 10, 2026",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
        content:
            "Cybersecurity helps protect digital information, systems and users from online threats. Learning basic cybersecurity practices is useful for everyone."
    },

    {
        title: "Tips for Learning Coding",
        category: "Programming",
        date: "August 8, 2026",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        content:
            "Consistent practice, small projects and understanding the basics can make learning programming easier and more enjoyable."
    }

];


let displayedArticles = 6;


// Display articles

function displayArticles(list = articles) {

    const container =
        document.getElementById("blogContainer");

    container.innerHTML = "";


    let visibleArticles =
        list.slice(0, displayedArticles);


    visibleArticles.forEach(function(article, index) {

        const card =
            document.createElement("div");

        card.className = "blog-card";


        card.innerHTML = `

            <img
                src="${article.image}"
                alt="${article.title}"
            >

            <div class="blog-content">

                <small>
                    ${article.category}
                    | ${article.date}
                </small>

                <h3>
                    ${article.title}
                </h3>

                <p>
                    ${article.content.substring(0, 100)}...
                </p>

                <button
                    onclick="showArticle(${articles.indexOf(article)})">

                    Read More

                </button>

            </div>

        `;


        container.appendChild(card);

    });


    if (displayedArticles >= list.length) {

        document.getElementById("loadMoreBtn")
            .style.display = "none";

    } else {

        document.getElementById("loadMoreBtn")
            .style.display = "block";

    }

}


// Load more

function loadMore() {

    displayedArticles += 2;

    displayArticles();

}


// Search

function searchArticles() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    const results =
        articles.filter(function(article) {

            return (

                article.title
                    .toLowerCase()
                    .includes(search)

                ||

                article.category
                    .toLowerCase()
                    .includes(search)

            );

        });


    displayedArticles = 6;

    displayArticles(results);

}


// Category filter

function filterCategory(category) {

    if (category === "All") {

        displayedArticles = 6;

        displayArticles();

        return;
    }


    const results =
        articles.filter(function(article) {

            return article.category === category;

        });


    displayedArticles = results.length;

    displayArticles(results);

}


// Show article

function showArticle(index) {

    const article =
        articles[index];


    document.getElementById("articleTitle")
        .textContent = article.title;


    document.getElementById("articleContent")
        .textContent = article.content;


    document.getElementById("articleModal")
        .style.display = "block";

}


// Close article

function closeArticle() {

    document.getElementById("articleModal")
        .style.display = "none";

}


// Dark mode

document
    .getElementById("darkModeBtn")
    .addEventListener("click", function() {

        document.body.classList.toggle("dark");

    });


// Contact form

function submitContact(event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

}


// Initial display

displayArticles();