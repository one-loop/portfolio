export default function Head() {
    return (
      <>
        <title>Saad Sifar Portfolio | CS @ NYU</title>
        <meta
          name="description"
          content="Hey there! I'm a Computer Science student at NYU."
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <link rel="icon" type="image/png" href="macintosh-favicon.png" />
        <meta property='og:title' content='Saad Sifar Portfolio'/>
        <meta property='og:image' content='https://github.com/one-loop/portfolio/blob/main/public/thumbnail.jpg?raw=true'/>
        <meta property='og:description' content="Hi, I'm Saad, a Computer Science student at New York University Abu Dhabi. This is my porfolio website"/>
        <meta property='og:url' content='https://saadsifar.vercel.app/'/>
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='627' />
        <meta name="robots" content="noindex" />
        {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        <script>
          function onSubmit(token) {
            const contactForm = document.getElementById("contact-form") as HTMLFormElement;
            
            if (contactForm) {
              contactForm.submit();
            }
          }
        </script> */}
      </>
    );
  }
