import Image1 from "@/assets/projects/batto-creative-XO7DruraBL4-unsplash(1).jpg"

type WorkGridDataProp = {
    image?: string;
    number?: string;
    title?: string;
    first?: string;
    second?: string;
    status: boolean;
}

const WorkGridData: WorkGridDataProp[] = [
    { image: Image1, status: true },
    { status: false, number: "01", title: "Our Approach", first: "Aliquam lobortis pellentesque sollicitudin. Cras in condimentum enim. Integer varius nisi ex, et dictum enim dapibus id.", second: "Vestibulum convallis, mi vitae tincidunt semper, ligula magna pulvinar libero, eget porttitor lorem felis vitae metus." },
    { image: Image1, status: true },
    { status: false, number: "01", title: "Our Approach", first: "Aliquam lobortis pellentesque sollicitudin. Cras in condimentum enim. Integer varius nisi ex, et dictum enim dapibus id.", second: "Vestibulum convallis, mi vitae tincidunt semper, ligula magna pulvinar libero, eget porttitor lorem felis vitae metus." },
    { status: false, number: "01", title: "Our Approach", first: "Aliquam lobortis pellentesque sollicitudin. Cras in condimentum enim. Integer varius nisi ex, et dictum enim dapibus id.", second: "Vestibulum convallis, mi vitae tincidunt semper, ligula magna pulvinar libero, eget porttitor lorem felis vitae metus." },
    { image: Image1, status: true },
    { status: false, number: "01", title: "Our Approach", first: "Aliquam lobortis pellentesque sollicitudin. Cras in condimentum enim. Integer varius nisi ex, et dictum enim dapibus id.", second: "Vestibulum convallis, mi vitae tincidunt semper, ligula magna pulvinar libero, eget porttitor lorem felis vitae metus." },
    { image: Image1, status: true },
    { image: Image1, status: true },
    { status: false, number: "01", title: "Our Approach", first: "Aliquam lobortis pellentesque sollicitudin. Cras in condimentum enim. Integer varius nisi ex, et dictum enim dapibus id.", second: "Vestibulum convallis, mi vitae tincidunt semper, ligula magna pulvinar libero, eget porttitor lorem felis vitae metus." },
    { image: Image1, status: true },
    { status: false, number: "01", title: "Our Approach", first: "Aliquam lobortis pellentesque sollicitudin. Cras in condimentum enim. Integer varius nisi ex, et dictum enim dapibus id.", second: "Vestibulum convallis, mi vitae tincidunt semper, ligula magna pulvinar libero, eget porttitor lorem felis vitae metus." },
    
];

export {
    WorkGridData
}