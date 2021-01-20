import React, { Children } from 'react';

import { useRouter, withRouter } from 'next/router'

import Link from 'next/link';

import classNames from 'classnames';

export default withRouter(
  ({ router, defaultClass, activeClass, children, as, href, ...rest }) => {
    const { locale } = useRouter();
    
    return (
      <Link {...rest} href={href} as={as}>
        {React.cloneElement(Children.only(children), {
          className: classNames(children.props.className, defaultClass, {
            [activeClass]: ('/' + locale + router.pathname).replace(/\/$/, '') === href || router.asPath === as,
          }),
        })}
      </Link>
    );
  }
);
