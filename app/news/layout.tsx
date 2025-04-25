export default function NewsLayout({ children, archive, latest }) {
  // Nextjs auto define đc các parallel page: @archive và @latest, đc gọi là các Slot
  //   nó là page component luôn chứ ko phải là data props hay là 1 route segment, do đó ko thể access từ URL đc

  return (
    <>
      {children}
      <section className="archive">{archive}</section>
      <section className="latest">{latest}</section>
    </>
  );
}
