import React from 'react';

const schemes = [
  { id: 1, name: 'Maternity Benefits Scheme', description: 'Support for expecting mothers.' },
  { id: 2, name: 'Elderly Care Program', description: 'Healthcare support for senior citizens.' },
];

const SchemePage = () => {
  return (
    <div>
      <h1>Government Schemes</h1>
      <ul>
        {schemes.map((scheme) => (
          <li key={scheme.id}>
            <h3>{scheme.name}</h3>
            <p>{scheme.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchemePage;
