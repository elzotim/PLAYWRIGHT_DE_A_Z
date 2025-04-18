/**laywright (TypeScript) | Hooks (beforeEach, AfterEach, beforeAll, AfterAll)
 *  beforeEach - Syntaxe - test.beforeEach(hookFunction) test.beforeEach(title,
 *  hookFunction) hook beforeEach qui est exécuté avant chaque test. Lorsqu'il est 
 * appelé dans la portée d'un fichier de test, s'exécute avant chaque test du fichier.
 *  Lorsqu'il est appelé dans un groupe test.describe(), s'exécute avant chaque test du groupe.
 *  Si plusieurs hooks beforeEach sont ajoutés, ils s'exécuteront dans l'ordre de leur enregistrement. 
 * afterEach - Syntaxe - test.afterEach(hookFunction) test.afterEach(title, hookFunction) hook afterEach 
 * qui est exécuté après chaque test. Lorsqu'il est appelé dans la portée d'un fichier de test, s'exécute 
 * après chaque test du fichier. Lorsqu'il est appelé à l'intérieur d'un groupe test.describe(), 
 * s'exécute après chaque test du groupe. Si plusieurs hooks afterEach sont ajoutés,
 *  ils s'exécuteront dans l'ordre de leur enregistrement. 
 * beforeAll - Syntaxe - test.beforeAll(hookFunction) test.beforeAll(title, hookFunction)
 *  Le hook beforeAll est exécuté une fois par processus de travail avant tous les tests.
 *  Lorsqu'il est appelé dans la portée d'un fichier de test, s'exécute avant tous les tests du fichier.
 *  Lorsqu'il est appelé à l'intérieur d'un groupe test.describe(), s'exécute avant tous les tests du groupe. 
 * Si plusieurs hooks beforeAll sont ajoutés, ils s'exécuteront dans l'ordre de leur enregistrement. 
 * afterAll - Syntaxe - test.afterAll(hookFunction) test.afterAll(title, hookFunction) 
 * Le hook afterAll est exécuté une fois par processus de travail après tous les tests.
 *  Lorsqu'il est appelé dans la portée d'un fichier de test, s'exécute après tous les 
 * tests du fichier. Lorsqu'il est appelé à l'intérieur d'un groupe test.describe(),
 *  s'exécute après tous les tests du groupe. Si plusieurs hooks
 *  afterAll sont ajoutés, ils s'exécuteront dans l'ordre de leur enregistrement.  */