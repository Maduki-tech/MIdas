import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const DynamicSteppedLineTo = dynamic(
    () => import('react-lineto').then((mod) => mod.SteppedLineTo),
    {
        ssr: false,
    }
);
export default function HandleLine() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <div className=''>
            {isClient && (
                <DynamicSteppedLineTo
                    from="A"
                    to="B"
                    borderStyle="dashed"
                    fromAnchor="left"
                    toAnchor="right"
                    orientation="h"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="B"
                    to="C"
                    borderStyle="dashed"
                    fromAnchor="left"
                    toAnchor="left"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="C"
                    to="D"
                    borderStyle="dashed"
                    fromAnchor="center"
                    toAnchor="center"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="D"
                    to="E"
                    borderStyle="dashed"
                    fromAnchor="center"
                    toAnchor="left"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="E"
                    to="F"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="left"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="F"
                    to="H"
                    borderStyle="dashed"
                    fromAnchor="left"
                    toAnchor="right"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="H"
                    to="G"
                    borderStyle="dashed"
                    fromAnchor="left"
                    toAnchor="right"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="G"
                    to="I"
                    borderStyle="dashed"
                    fromAnchor="left"
                    toAnchor="right"
                    orientation="h"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="I"
                    to="L"
                    borderStyle="dashed"
                    fromAnchor="left"
                    toAnchor="right"
                    orientation="h"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="L"
                    to="K"
                    borderStyle="dashed"
                    fromAnchor="left"
                    toAnchor="right"
                    orientation="h"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="K"
                    to="J"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="J"
                    to="M"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="h"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="M"
                    to="N"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="N"
                    to="O"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="O"
                    to="P"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="P"
                    to="Q"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="h"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="Q"
                    to="R"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="R"
                    to="S"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="h"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="S"
                    to="T"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="T"
                    to="U"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="U"
                    to="V"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="V"
                    to="W"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="W"
                    to="X"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="X"
                    to="Y"
                    borderStyle="dashed"
                    fromAnchor="right"
                    toAnchor="center"
                    orientation="v"
                    borderWidth={2}
                />
            )}
            {isClient && (
                <DynamicSteppedLineTo
                    from="Y"
                    to="Z"
                    borderStyle="dashed"
                    fromAnchor="center left"
                    toAnchor="right"
                    orientation="h"
                    borderWidth={2}
                />
            )}
        </div>
    );
}
