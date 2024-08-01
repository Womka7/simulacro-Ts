export const Card = () =>{
    const container = document.createElement('article') as HTMLElement;
    const title = document.createElement('h3') as HTMLHeadingElement;
    const country = document.createElement('p') as HTMLParagraphElement;
    const description = document.createElement('p') as HTMLParagraphElement;

    title.innerHTML ="Medellin";
    country.innerHTML = "Colombia";
    description.innerHTML = "Ciudad famosa por sus playas, museos y restaurantes";
    container.append(title,country,description);

    return container;
}