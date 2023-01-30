# Aplicação ETL

Essa aplicação foi desenvolvida com o intuito de automatizar os processo de extração, transformação e carregamento sobre os dados fornecidos pelo o Governo de Minas Gerais sobre as infecções e óbitos por COVID-19 no estado.

O resultado desse processo será usado pela a aplicação de visualização de dados Tableau para a criação de paineis informativos sobre a atual situação do estado de Minas Gerais.

Essa aplicação faz o carregamento de dados em formato `.csv`, transforma eles em tabelas de dimensões e fatos por meio de rotinas sobre o banco de dados Postgres. Após as transformações, os dados são exportados em formato `.sql` para serem carregados no Tableau.
