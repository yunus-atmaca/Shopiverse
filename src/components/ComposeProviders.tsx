import type {ComponentType, ReactNode} from 'react';
import React from 'react';

type ComponentWithProps = {
  children: ReactNode;
  props?: any;
};

type ComposeProvidersProps = {
  components: Array<ComponentType<ComponentWithProps>>;
  children: ReactNode;
};

function ComposeProviders(props: ComposeProvidersProps): ReactNode {
  const providers = props.components.reduceRight(
    (prev, Current) => <Current>{prev}</Current>,
    props.children,
  );

  return providers;
}
export default ComposeProviders;
