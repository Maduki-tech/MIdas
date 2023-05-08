import React from 'react';

const FormComponent = () => {
    return (
        <div
            id="form"
            className=" mx-auto mt-10 max-w-xl rounded bg-cBlack/40 p-8 text-white shadow-lg"
        >
            <div
                data-tf-widget="I1S6jtUw"
                data-tf-opacity="0"
                data-tf-hide-headers
                data-tf-iframe-props="title=My typeform"
                data-tf-transitive-search-params
                data-tf-medium="snippet"
                style={{ width: '100%', height: '500px' }}
            ></div>
            <div
                data-tf-popover="I1S6jtUw"
                data-tf-opacity="100"
                data-tf-hide-headers
                data-tf-iframe-props="title=My typeform"
                data-tf-transitive-search-params
                data-tf-button-color="#0445AF"
                data-tf-medium="snippet"
                style={{ all: 'unset' }}
                className=""
            ></div>
        </div>
    );
};

export default FormComponent;
